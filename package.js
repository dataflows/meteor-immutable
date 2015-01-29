Package.describe({
  name: "dataflows:immutable",
  summary: "Immutable Data Collections for Javascript.",
  version: "3.6.2",
  git: "https://github.com/dataflows/meteor-immutable.git"
});

Npm.depends({
	"immutable": "3.6.2"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0.1");
  api.addFiles("vendor/immutable.js", "client");
  api.addFiles("lib/require-immutable.js", "server");
  api.export("Immutable", ["server", "client"]);
});
