# Renovate Configs

Add this this to your config:

```json5
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>gossi/frontend-configs//renovate/manage.json5",
    "github>gossi/frontend-configs//renovate/labels.json5",
    "github>gossi/frontend-configs//renovate/packages.json5",
    "github>gossi/frontend-configs//renovate/frontend-configs.json5"
  ]
  // ...
}
```

See what each of it is doing:

- [manage](./manage.json5)
- [labels](./labels.json5)
- [packages](./packages.json5)
- [frontend-configs](./frontend-configs.json5)
