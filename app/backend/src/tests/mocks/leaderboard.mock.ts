export const teamList = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  }
]

export const matchList = [
  {
    "id": 1,
    "homeTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamId": 2,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 2,
    "homeTeamId": 2,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 3,
    "homeTeamId": 2,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 4,
    "homeTeamId": 1,
    "homeTeamGoals": 0,
    "awayTeamId": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }
]

export const homeList = [
  {
    "name": "Bahia",
    "totalPoints": 4,
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 2,
    "goalsOwn": 1,
    "goalsBalance": 1,
    "efficiency": 66.67
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 1,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 2,
    "goalsBalance": -1,
    "efficiency": 16.67
  },
]

export const awayList = [
  {
    "name": 'Avaí/Kindermann',
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 2,
    "goalsOwn": 2,
    "goalsBalance": 0,
    "efficiency": 44.44
  },
  {
    "name": 'Bahia',
    "totalPoints": 1,
    "totalGames": 1,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 1,
    "goalsOwn": 1,
    "goalsBalance": 0,
    "efficiency": 33.33
  }
]

export const allList = [
  {
    "name": 'Bahia',
    "totalPoints": 5,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 3,
    "goalsOwn": 2,
    "goalsBalance": 1,
    "efficiency": 55.56
  },
  {
    "name": 'Avaí/Kindermann',
    "totalPoints": 5,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 2,
    "goalsFavor": 3,
    "goalsOwn": 4,
    "goalsBalance": -1,
    "efficiency": 33.33
  }
]