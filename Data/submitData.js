const KEYS ={
    ClaimData:'ClaimData',
    OptOutData: 'OptOutData',
}

export function insertClaimData(data){
    localStorage.setItem(KEYS.ClaimData, JSON.stringify(data));
}

export function insertOptOutData(data){
    localStorage.setItem(KEYS.OptOutData, JSON.stringify(data));
}

export function GetClaimData(){
    if (localStorage.getItem(KEYS.ClaimData == null))
        localStorage.setItem(KEYS.ClaimData, JSON.stringify([]));

    return JSON.parse(localStorage.getItem(KEYS.ClaimData));
}