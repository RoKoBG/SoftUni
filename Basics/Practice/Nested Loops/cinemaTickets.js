function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let studentTicket = 0;
  let standardTicket = 0;
  let kidsTicket = 0;

  while (command !== "Finish") {
    let movieName = command;
    index++;
    let allTickets = Number(input[index]);
    let freeSpace = allTickets;
    index++;
    let ticketType = input[index];
    while (ticketType != "End") {
      switch (ticketType) {
        case "student":
          studentTicket++;
          break;
        case "standard":
          standardTicket++;
          break;
        case "kid":
          kidsTicket++;
          break;
      }
      freeSpace--;
      if (freeSpace == 0) {
        break;
      }
      index++;
      ticketType = input[index];
    }
    let boughtTickets = allTickets - freeSpace;
    let percentageFull = (boughtTickets / allTickets) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    index++;
    command = input[index];
  }
  let allBoughtTickets = kidsTicket + standardTicket + studentTicket;
  console.log(`Total tickets: ${allBoughtTickets}`);
  console.log(
    `${((studentTicket / allBoughtTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTicket / allBoughtTickets) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidsTicket / allBoughtTickets) * 100).toFixed(2)}% kids tickets.`
  );
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
