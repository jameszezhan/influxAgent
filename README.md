# InfluxDB Service

## Usage

All response will have the form

```
json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```
Subsequent response definitions will only detail the expected value of the `data field`

### list all avaiable series

**Definition**
`GET /api/v1/series/list`

**Response**
- `200 OK` on success

```
json
[
    {
        "identifier": "temperature",
        "name": "Temperature"
    },
    {
        "identifier": "moisture",
        "name": "Moisture"
    }
]
```




