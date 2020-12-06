const stringifyDate=(date)=>{
    const options={day:'numeric',month:'short',year:'number'};
    const newDate=!date ? "undefined":
                new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
}