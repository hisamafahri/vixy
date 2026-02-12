# Set Cookie Specification

## Official Specification

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#attributes
- https://httpwg.org/specs/rfc6265.html#sane-set-cookie

Rules:

1. Should not include more than one `Set-Cookie` header string
2. Should not produce two attributes with the same name in the same `Set-Cookie` string
3. If both `Expires` and `Max-Age` are set, `Max-Age` has precedence.

## Additional Specification
