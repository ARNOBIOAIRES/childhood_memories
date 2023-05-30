import "@fastify/jwt"

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      sub: strnng,
      name: string,
      avatarUrl: string
      }  
  }
}