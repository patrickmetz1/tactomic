import { NextFunction, Request, Response } from 'express';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100; // Maximum requests per window

export const rateLimit = (req: Request, res: Response, next: NextFunction): void => {
  const ip = req.ip;
  const now = Date.now();

  if (!store[ip]) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
  } else {
    if (now > store[ip].resetTime) {
      store[ip] = {
        count: 1,
        resetTime: now + WINDOW_MS,
      };
    } else {
      store[ip].count++;
    }
  }

  if (store[ip].count > MAX_REQUESTS) {
    res.status(429).json({
      error: 'Too many requests, please try again later.',
      retryAfter: Math.ceil((store[ip].resetTime - now) / 1000),
    });
    return;
  }

  // Clean up old entries periodically
  if (Math.random() < 0.01) { // 1% chance to clean up
    Object.keys(store).forEach((key) => {
      if (now > store[key].resetTime) {
        delete store[key];
      }
    });
  }

  next();
}; 