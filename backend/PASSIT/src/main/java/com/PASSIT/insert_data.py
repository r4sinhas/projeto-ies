import requests


def post(url, data=None, json=None, headers=None):
    r = requests.post(url, data=data, json=json, headers=headers)
    print(r.text)
    return r


def get(url, headers=None):

    r = requests.get(url, headers=headers)
    print(r.text)
    return r


def insert_data(type_insert, url):
    if type_insert == 'player':
        post(url, json={'name': 'Gonçalo',
                        'username': "gon",
                        'password': "gon",
                        'email': "gon",
                        'position': "pos",
                        "height": 185,
                        "weight": 85,
                        "number": 10,
                        "age": 12,
                        "team_id": {
                            "id": 1
                        },
                        "last_stamina": 100,
                        })
    elif type_insert == 'team':
        post(url, json={'teamName': 'Porto', 'city':
                        'Porto',
                        'country': 'Portugal'}
             )
    elif type_insert == 'coach':
        post(url, json={'name': 'Gonçalo',
                        'username': 'goncalo',
                        'password': 'goncalo',
                        'email': 'goncalo@',
                        'team_id': {
                            'id': 1
                        }
                        })

    elif type_insert == 'fan':
        post(url, json={'name': 'Pedro',
                        'username': 'r4sinhas',
                        'password': 'r4sinhas',
                        'email': 'r4sinhas@',
                        'player_id': {
                            'id': 1
                        }
                        })


def main():
    # **Post**
    insert_data('team', 'http://localhost:8080/api/v1/team/add')
    insert_data('player', 'http://localhost:8080/api/v1/player/add')
    insert_data('coach', 'http://localhost:8080/api/v1/coach/add')
    insert_data('fan', 'http://localhost:8080/api/v1/fan/add')


if __name__ == '__main__':
    main()
