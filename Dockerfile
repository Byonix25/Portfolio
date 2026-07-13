# Build Stage
FROM node:22-alpine AS build
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies first for caching
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --config.minimum-release-age=0

# Copy source code and build
COPY . .
RUN pnpm --config.minimum-release-age=0 run build

# Production Stage
FROM nginx:alpine
# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom nginx config for React Router (Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
