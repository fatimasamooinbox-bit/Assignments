
// Import HTTP module
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {

    // Home route
    if (req.url === '/' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Welcome to Our College!');

    }

    // About route
    else if (req.url === '/about' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end(
            'Our college provides quality education and modern learning facilities.'
        );

    }

    // Courses route
    else if (req.url === '/courses' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>Available Courses</h1>
            <ul>
                <li>Web Development</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
            </ul>
        `);

    }

    // Students route
    else if (req.url === '/students' && req.method === 'GET') {

        const students = [
            { id: 1, name: 'Ali' },
            { id: 2, name: 'Ahmed' },
            { id: 3, name: 'Sara' }
        ];

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(students, null, 2));

    }

    // Unknown route
    else {

        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Page Not Found');

    }

});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
