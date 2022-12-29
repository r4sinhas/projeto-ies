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
        with open('players.txt', 'r') as f:
            for line in f:
                line = line.split(';')
                if len(line) == 12:
                    post(url, json={'name': line[0],
                                    'username': line[1],
                                    'password': line[2],
                                    'email': line[3],
                                    'position': line[4],
                                    "height": line[5],
                                    "weight": line[6],
                                    "number": line[7],
                                    "age": line[8],
                                    "team_id": {
                                        "id": line[9]
                                    },
                                    "last_stamina": line[10],
                                    "img_url": line[11]
                                    })
                elif len(line) == 11:
                    post(url, json={'name': line[0],
                                    'username': line[1],
                                    'password': line[2],
                                    'email': line[3],
                                    'position': line[4],
                                    "height": line[5],
                                    "weight": line[6],
                                    "number": line[7],
                                    "age": line[8],
                                    "team_id": {
                                        "id": line[9]
                                    },
                                    "last_stamina": line[10]
                                    })
    elif type_insert == 'team':
        with open('teams.txt', 'r') as f:
            for line in f:
                line = line.split(';')
                post(url, json={'team_name': line[0],
                                'city': line[1],
                                'country': line[2]
                                })

    elif type_insert == 'coach':
        with open('coaches.txt', 'r') as f:
            for line in f:
                line = line.split(';')
                post(url, json={'name': line[0],
                                'username': line[1],
                                'password': line[2],
                                'email': line[3],
                                'team_id': {
                                    'id': line[4]
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

    elif type_insert == 'game':
        with open('games.txt', 'r') as f:
            for line in f:
                line = line.split(';')
                post(url, json={'date': line[0],
                                'teams': [
                                    {
                                        'id': line[1]
                                    },
                                    {
                                        'id': line[2]
                                    }
                                ]
                                })

    elif type_insert == 'statsbygame':
        with open('statsbygame.txt', 'r') as f:
            for line in f:
                line = line.split(';')
                post(url, json={'game_id': {
                    'id': line[0]
                },
                    'player_id': {
                    'id': line[1]
                },
                "minutes_played": line[2]
                })


def main():
    # **Post**
    insert_data('team', 'http://localhost:8080/api/v1/team/add')
    insert_data('player', 'http://localhost:8080/api/v1/player/add')
    insert_data('coach', 'http://localhost:8080/api/v1/coach/add')
    insert_data('fan', 'http://localhost:8080/api/v1/fan/add')
    insert_data('game', 'http://localhost:8080/api/v1/game/add')
    insert_data('statsbygame', 'http://localhost:8080/api/v1/statsbygame/add')


if __name__ == '__main__':
    main()
