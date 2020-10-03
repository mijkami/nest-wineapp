import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {jwtConstants} from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Todo: Change to false after tests
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret
    });
  }

  async validate(payload: any) {
    return { username: payload.username, _id: payload.sub };
  }
}
