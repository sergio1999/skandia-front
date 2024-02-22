import { HttpInterceptorFn } from '@angular/common/http';

export const clientHttpInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
