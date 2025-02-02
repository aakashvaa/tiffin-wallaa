FROM node:22-alpine

WORKDIR /usr/src/app

COPY package* pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
