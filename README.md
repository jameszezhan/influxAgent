# InfluxDB Agent

## General

All response will have the form

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```
Subsequent response definitions will only detail the expected value of the `data field`

### list of entry points
Series: `METHOD /api/v1/series`

Moisture: `METHOD /api/v1/moisture`

Temperature: `METHOD /api/v1/temperature`

### Series Usage

**Definition**
`GET /api/v1/series/list`

**Response**
- `200 OK` on success

```json
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

### Moisture Usage


`POST /api/v1/moisture/add`

**Definition**
Add a data point to the moisture measurement

**Payload**
```json
{
    "sensor": "sensor name for tagging",
    "reading": "sensor reading"
}
```

**Response**
- `200 OK` on success


`GET /api/v1/moisture/list/:limit/:sensor`

**Defnition**
Fetch a list of moisture datapoint. By default, return value is limit to 10 data point.

## Docker specifics

**To test if the container is running**

`curl localhost:49160`
