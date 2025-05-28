nix
{ pkgs ? import <nixpkgs> {} }:

let
  bunPkgs = import (builtins.fetchTarball "https://github.com/oven-sh/bun/archive/main.tar.gz") { inherit pkgs; };
in
pkgs.mkShell {
  buildInputs = [
    bunPkgs.bun
    pkgs.nodejs # Nuxt requires Node.js for certain operations, even with Bun
  ];

  shellHook = ''
    export BUN_INSTALL=$HOME/.bun
    export PATH=$BUN_INSTALL/bin:$PATH
  '';
}