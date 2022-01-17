import { Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller()
export  class BaseController {
    
}
