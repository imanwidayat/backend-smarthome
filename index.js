const express = require('express');
const ewelink = require('ewelink-api');
var ac = require('node-ambiclimate'),
    client;

client = new ac("4e135810-a226-4ea8-952d-a72dda6c5ee4", "65d7b096-33f7-4d2a-a81c-6656b6fcbf84", "salsadyah10042000@gmail.com", "asdfghjkl");

const PORT = 8080;

const app = express();

app.use(express.json());

app.post('/device/:channel/:status', (req, res) => {

    var data = {
        "channel": req.params.channel,
        "email": "iman.widayat98@gmail.com",
        "password": "imanwidayat18"
    }

    console.log(req.body.email);

    console.log(data);

    async function devicePowerState() {

        try {
            const connection = new ewelink({
                email: data.email,
                password: data.password,
                region: 'us',
            });

            const status = await connection.setDevicePowerState("1000cbc723", req.params.status, data.channel);

            res.status(200).send(status)
        } catch (e) {
            res.status(403).send(e)
        }
    }

    devicePowerState();
});

app.get('/ac/off', (req, res) => {

    async function offAC() {

        try {
            client.off(
                {
                    room_name: 'kamar',
                    location_name: 'rumah'
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err);
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data);
                }
            );


        } catch (e) {
            res.status(403).send(e)
        }
    }

    offAC();
});


app.get('/ac/device', (req, res) => {

    async function offAC() {

        try {
            client.devices(
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err);
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data);
                }
            );


        } catch (e) {
            res.status(403).send(e)
        }
    }

    offAC();
});


app.get('/ac/comfort', (req, res) => {

    async function f() {

        try {
            client.comfort(
                {
                    room_name: 'kamar',
                    location_name: 'rumah'
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err);
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data);
                }
            );


        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});


app.get('/ac/comfortmode/:value', (req, res) => {

    async function f() {

        try {
            client.feedback(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
                    value: req.params.value
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});


app.get('/ac/temperature', (req, res) => {

    async function f() {

        try {
            client.sensor_temperature(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
                    value: req.params.value
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});


app.get('/ac/temperature/:value', (req, res) => {

    async function f() {

        try {
            client.temperature(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
                    value: req.params.value
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});

app.get('/ac/mode', (req, res) => {

    async function f() {

        try {
            client.mode(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});


app.get('/ac/state', (req, res) => {

    async function f() {

        try {
            client.appliance_states(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
    limit: 5,
    offset: 0
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});



app.get('/ac/ir', (req, res) => {

    async function f() {

        try {
            client.ir_feature(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
    limit: 5,
    offset: 0
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});


app.get('/ac/deploy', (req, res) => {

    async function f() {

        try {
            client.deployment(
                {
                    room_name: 'kamar',
                    location_name: 'rumah',
    mode: 'cool',
    power: 'on',
    feature: {
      temperature: 16,
      fan: 'high',
      louver: 'down',
    }
                },
                function (err, data) {
                    if (err) {
                        console.error(err);
                        res.status(403).send(err)
                        return;
                    }
                    console.log(data);
                    res.status(200).send(data)
                }
            );
        } catch (e) {
            res.status(403).send(e)
        }
    }

    f();
});



app.listen(
    PORT,
    () => console.log(`its alive now on http://localhost:${PORT}`)
)