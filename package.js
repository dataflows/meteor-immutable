Package.describe({
  summary: "Immutable Data Collections for Javascript.",
  version: "3.7.4",
  git: "https://github.com/dataflows/meteor-immutable.git",
  name: "dataflows:immutable"
});

Npm.depends({
	"immutable": "3.7.4"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0.1");
  api.addFiles("vendor/Immutable.js", "client");
  api.addFiles("lib/require-immutable.js", "server");
  api.addFiles("lib/export-immutable.js", "client");
  api.export("Immutable", ["server", "client"]);
});
