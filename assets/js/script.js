<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Resume</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="container">
            <h1>My Resume</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="about" class="section">
            <div class="container">
                <h2>About Me</h2>
                <div class="about-content">
                    <img src="img/profile.jpg" alt="Profile Picture" class="profile-pic">
                    <p>Hello! I'm <strong>[Your Name]</strong>, a passionate professional with experience in <em>[Your Field]</em>. I enjoy creating innovative solutions and bringing ideas to life through technology and creativity.</p>
                </div>
            </div>
        </section>

        <section id="experience" class="section">
            <div class="container">
                <h2>Experience</h2>
                <div class="experience-list">
                    <div class="experience-item">
                        <h3>Senior Developer</h3>
                        <p><em>Company Name - 2020 to Present</em></p>
                        <p>Leading a team of developers to build innovative web applications with modern technologies.</p>
                    </div>
                    <div class="experience-item">
                        <h3>Software Engineer</h3>
                        <p><em>Previous Company - 2017 to 2020</em></p>
                        <p>Developed and maintained multiple projects, focusing on clean, efficient code and user experience.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="section">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li>HTML, CSS, JavaScript</li>
                    <li>C++, Python, Java</li>
                    <li>React, Node.js, Express</li>
                    <li>Database Management: MySQL, MongoDB</li>
                </ul>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="container">
                <h2>Contact</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 [Your Name]. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
