Package.describe({
  summary: "Immutable Data Collections for Javascript.",
  git: "https://github.com/kraf/meteor-immutable.git"
  version: "3.7.4",
});

Npm.depends({
	"immutable": "3.7.4"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0.1");
  api.addFiles("vendor/Immutable.js", "client");
  api.addFiles("lib/require-immutable.js", "server");
  api.export("Immutable", ["server", "client"]);
});
