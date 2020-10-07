import {CanActivate, ExecutionContext, HttpException, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if(!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);
  }

  matchRoles(roles, userRoles) {
    for (const userRole in userRoles) {
      if (userRoles[userRole] === roles.toString()) {
        return true;
      }
    }
    return false;
  }
}
