# bc13_w9_project-frontend-dingo

## Dingo’s Directives README

Problem: Resource Overload! How to know which of the tech links to follow and dedicate our limited time.

Our Solution: To have a centralised all in one go to hub where resources are peer reviewed and rated to help you decide which ones are worth your precious time!

## Acknowledgements

- [https://react-hook-form.com/get-started](https://react-hook-form.com/get-started)
- [https://expressjs.com/en/resources/middleware/cors.html](https://expressjs.com/en/resources/middleware/cors.html)
- Hamza
- Nadeem
- The dingos!

## API Reference


#### Reference Table

              |

| HTTP Method | Path            | Additional info | Result                 | Result                                       |
| ----------- | --------------- | --------------- | ---------------------- | ---------------------------------------------|
| GET         | /api/resources  |                 | get all resources      | { success: Boolean, payload: Resource array} |
| GET         | /api/resources  | ?format=video   | get resource by format | { success: Boolean, payload: Resource array} |
| POST        | /api/resources  | {body}          | post new resource      | { success: Boolean, payload: Resource}       |

