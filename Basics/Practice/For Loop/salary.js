function salary(input) {
  let index = 0;
  const openTabs = Number(input[index]);
  index++;
  let salary = Number(input[index]);
  index++;
  const facebookFee = 150;
  const instagramFee = 100;
  const redditFee = 50;
  for (let i = 0; i < openTabs; i++) {
    let currentTab = input[index];
    index++;
    if (currentTab === "Facebook") {
      salary -= 150;
    } else if (currentTab === "Instagram") {
      salary -= 100;
    } else if (currentTab === "Reddit") {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
