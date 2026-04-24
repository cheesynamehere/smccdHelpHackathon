const helpInput = document.getElementById("help-input");
const searchBtn = document.getElementById("search-btn");
const resultsDiv = document.getElementById("results");
const randomBtn = document.getElementById("random-btn")

randomBtn.addEventListener("click", function () {
  let allKeywords = [];

    for (const resource of allResources) {
      for (const keyword of resource.keywords) {
        allKeywords.push(keyword);
      }
    }

    const randomIndex = Math.floor(Math.random() * allKeywords.length);
    const randomKeyword = allKeywords[randomIndex];

    helpInput.value = randomKeyword;
})

searchBtn.addEventListener("click", function () {
  const userInput = helpInput.value.toLowerCase().trim();
  console.log(userInput);

  if (userInput === "") {
    resultsDiv.innerHTML = `    
    <div class="max-w-2xl mx-auto mt-6 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-xl p-4 shadow">
      Please type what you need help with.
    </div>
    `;
    return;
  }

  let list = [];

  for (const resource of allResources) {
    let score = 0;
    let matchedKeywords = [];

    for (const keyword of resource.keywords) {
        if (userInput.includes(keyword)) {
        score += 1;
        matchedKeywords.push(keyword);
        }
    }

    if (score > 0) {
        list.push({
          resource: resource,
          score: score,
          matchedKeywords: matchedKeywords
    });
    }
  }
  
  list.sort((a, b) => b.score - a.score);

  console.log(list);

  resultsDiv.innerHTML = "";
  
  if (list.length === 0) {
    resultsDiv.innerHTML = `    
    <div class="max-w-2xl mx-auto mt-6 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-xl p-4 shadow">
      No matching resources found. Please try a different phrase!
    </div>
    `;
  } else {
    for (let i = 0; i < list.length; i++) {
      const result = list[i];
      const resource = result.resource;
      const matchedKeywords = result.matchedKeywords;

      if (i === 0) {
        resultsDiv.innerHTML += `
        <div class="max-w-2xl mx-auto mt-6 bg-white rounded-2xl shadow-lg p-6 border-2 border-red-500">
          <h2 class="text-xl font-bold mb-2">${resource.name}</h2>
          <p class="text-gray-700 mb-4">${resource.description}</p>
          <p class="text-sm text-gray-500 mb-4">
            Because you mentioned: ${matchedKeywords.join(", ")}
          </p>
          <p class="text-md text-gray-500 mb-4"> Next step: ${resource.nextStep}</p>
          <a href="${resource.link}" target="_blank" class="cursor-pointer text-red-600 hover:underline font-medium">
            Visit Resource
          </a>
        </div>
      `;
      } else {
      resultsDiv.innerHTML += `
        <div class="max-w-2xl mx-auto mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-xl font-bold mb-2">${resource.name}</h2>
          <p class="text-gray-700 mb-4">${resource.description}</p>
          <p class="text-sm text-gray-500 mb-4">
            Because you mentioned: ${matchedKeywords.join(", ")}
          </p>
          <p class="text -md text-gray-500 mb-4"> Next step: ${resource.nextStep}</p>
          <a href="${resource.link}" target="_blank" class="cursor-pointer text-red-600 hover:underline font-medium">
            Visit Resource
          </a>
        </div>
      `;
      }
    }
  }
});
