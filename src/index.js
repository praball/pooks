document.getElementById("background-select").addEventListener("change", changeBackground);

        function changeBackground() {
            const selectedOption = document.getElementById("background-select").value;
            const baseUrl = "url(https://picsum.photos/id/";
            let backgroundImage = "";

            switch (selectedOption) {
                case "option1":
                    backgroundImage = `url(480p.jpg)`;
                    break;
                case "option2":
                    backgroundImage = `url(360p.jpg)`;
                    break;
                case "option3":
                    backgroundImage = `url(721p.jpg)`;
                    break;
                case "option4":
                    backgroundImage = `url(1091p.jpg)`;
                    break;
                default:
                    backgroundImage = 'url(480p.jpg)';
            }

            document.body.style.backgroundImage = backgroundImage;
        }

        // Call changeBackground function once for the initial load
        window.onload = changeBackground();