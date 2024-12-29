function display_projects(state) {
    if (state === void 0) { state = 0; }
    if (state == 1) {
        document.getElementById("button2").innerHTML = "<p>In 2024 I lead a 6 month long marketing campaign that increased my clients conversion rates by 13%. This campaigned entailed me Utilizing SEO techniques, writing 5 high quality instagram posts, and 11 newsletters per week!</p>";
        document.getElementById("button3").innerHTML = "<p>In 2022 I lead a 12 month long marketing campaign that increased my clients conversion rates by 64%. This campaigned entailed me Utilizing SEO techniques, writing 5 high quality instagram posts, and 11 newsletters per week!</p>";
    }
    if (state == 2) {
        document.getElementById("button1").innerHTML = "<p>I built this Engineering Portfolio in 2019. The owner portal allow's you to upload projects easily as well as update existing ones</p>";
        document.getElementById("button3").innerHTML = "<p>I built this Portfolio for a Dental Student in 2022. Which was focused on being competitive for dental residency and is reflective of collaborative projects in academic environments.</p>";
    }
    if (state == 3) {
        document.getElementById("button1").innerHTML = "<p>In 2024 I lead a 6 month long marketing campaign that increased my clients conversion rates by 13%. This campaigned entailed me Utilizing SEO techniques, writing 5 high quality instagram posts, and 11 newsletters per week!</p>";
        document.getElementById("button2").innerHTML = "<p>In 2022 I lead a 12 month long marketing campaign that increased my clients conversion rates by 64%. This campaigned entailed me Utilizing SEO techniques, writing 5 high quality instagram posts, and 11 newsletters per week!</p>";
    }
    else {
    }
}
