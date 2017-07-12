# metabolizer

Express middleware to expose meta information

### Usage

Can use the `app.use()` Express syntax to hook up metabolizer.

Example:

```js
app.use('/version', require('metabolizer')(['name', 'version']));
```

This exposes the `name` and `version` properties in `package.json` to the "/version" route. If you hit `<application URL>/version`, you will get a JSON object with those values.

If you do not pass in a list, it will return just a version by default.

### Notes

If you want to expose a value from `package.json`, prepend the variable name with `npm_package_`. For example, if you wanted the package version, use the environment variable `npm_package_version`.

The values are determined at runtime. If the value somehow changes after startup, metabolizer WILL NOT use the new value. This is to keep the (already trivial) performance hit even smaller.