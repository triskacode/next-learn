{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs-slim_latest
    pkgs.corepack_latest
  ];
  idx.workspace.onCreate = {
    pnpm-install = "pnpm install";
  };
}
