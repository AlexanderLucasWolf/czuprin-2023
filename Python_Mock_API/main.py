from flask import Flask
import json
from threading import Thread
import random
import time
import math

json_sensor = {1: {"serial_id": 9214708947,
                   "values": [
                       {"ref_number": 1,
                        "value": "schnell"},
                       {"ref_number": 2,
                        "value": 0.0},
                       {"ref_number": 3,
                        "value": 0.0},
                       {"ref_number": 4,
                        "value": [{"0": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},

                                  ]}
                   ]

                   }, 2: {"serial_id": 9214708947,
                   "values": [
                       {"ref_number": 1,
                        "value": "schnell"},
                       {"ref_number": 2,
                        "value": 0.0},
                       {"ref_number": 3,
                        "value": 0.0},
                       {"ref_number": 4,
                        "value": [{"0": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},

                                  ]}
                   ]

                   }, 3: {"serial_id": 9214708947,
                   "values": [
                       {"ref_number": 1,
                        "value": "schnell"},
                       {"ref_number": 2,
                        "value": 0.0},
                       {"ref_number": 3,
                        "value": 0.0},
                       {"ref_number": 4,
                        "value": [{"0": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},
                                  {"1": 0.0},

                                  ]}
                   ]

                   }}


json_sensor[2]["serial_id"] = 53423426
json_sensor[3]["serial_id"] = 645345643


def add_value(sensor, value):
    json_sensor[sensor]["values"][1]["value"] = value
    del json_sensor[sensor]["values"][3]["value"][0]
    dic = {str(time.time()): value}
    json_sensor[sensor]["values"][3]["value"].append(dic)

    al = 0
    for i in json_sensor[sensor]["values"][3]["value"]:
        key = list(i.keys())[0]
        al += i[str(key)]

    json_sensor[sensor]["values"][2]["value"] = al / 15


def threaded_function1(arg):
    while True:
        time.sleep(1)
        value = float(random.randrange(-1700, 4000, 1) / 100)
        add_value(1, value)


def threaded_function2(arg):
    while True:
        for i in range(-100, 400, 1):
            add_value(2, i)
            time.sleep(1)
        for i in range(400, -100, -1):
            add_value(2, i)
            time.sleep(1)


def threaded_function3(arg):
    while True:
        for i in range(0, 360, 15):
            time.sleep(1)
            value = math.sin(math.pi/180*i)
            add_value(3, i)


app = Flask(__name__)


@app.route('/api/device/1/data')
def hello():
    return json.dumps(json_sensor[1])


@app.route('/api/device/2/data')
def hello2():
    return json.dumps(json_sensor[2])


@app.route('/api/device/3/data')
def hello3():
    return json.dumps(json_sensor[3])


if __name__ == '__main__':
    thread1 = Thread(target=threaded_function1, args=(10,))
    thread2 = Thread(target=threaded_function2, args=(10,))
    thread3 = Thread(target=threaded_function3, args=(10,))
    thread1.start()
    thread2.start()
    thread3.start()
    print("thread finished...exiting")
    app.run()
