"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "O nome ser\u00E1 utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir\ninforma\u00E7\u00F5es da pessoa conectada.", example: "Paulo Salvatore" }, email: { required: true, type: () => String, description: "O e-mail \u00E9 necess\u00E1rio apra o login, mas n\u00E3o necessariamente precisa ser o mesmo e-mail da\nrede social que estiver conectada. Login sem rede social precisa de uma senha.", example: "email@email.com" }, password: { required: false, type: () => String, description: "\u00C9 poss\u00EDvel conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente\n\u00E9 necess\u00E1rio informar uma senha.", example: "123@abc" } };
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map