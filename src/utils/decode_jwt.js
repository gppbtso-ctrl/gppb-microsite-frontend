import { jwtDecode } from "jwt-decode";

function decode_jwt(token) {
  const token_access = token;
  const decoded = jwtDecode(token_access);
  return decoded;
}

export default decode_jwt;
