const OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "XXX",
        "X-RapidAPI-Host": "YYY",
    },
};

const fetchIpInfo = async (ip) => {
    try {
        const res = await fetch(`https://freeipapi.com/api/json/${ip}`, OPTIONS);
        return await res.json();
    } catch (err) {
        return console.error(err);
    }
};

// esto faise para non ser repetitivo nas seguintes 4 liñas
const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value } = $input;
    if (!value) return;

    $submit.setAttribute("disabled", "");
    $submit.setAttribute("aria-busy", "true");

    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    $submit.removeAttribute("disabled");
    $submit.removeAttribute("aria-busy");
});