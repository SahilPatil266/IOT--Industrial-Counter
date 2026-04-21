IoT Industrial Counter
A real-time automated counting system built for the textile manufacturing industry to eliminate manual counting errors on the production floor.

The Problem
In textile units, workers manually count cloth pieces as they cut and sort them. This leads to significant inaccuracies, disputes, and production inefficiencies.

The Solution
Each workstation has a NodeMCU ESP8266 microcontroller paired with an IR motion sensor. Every time a worker swipes a cut piece to the right, the sensor detects the motion and increments the counter by one automatically. All station counts update in real time to a central database, which a manager can monitor from their office through a React dashboard showing every station's live count simultaneously.

Tech Stack
NodeMCU ESP8266
IR Motion Sensor
Firebase / Real-time Database
React (Manager Dashboard)
JavaScript

Impact
Removes human counting error entirely, gives managers live visibility across all stations, and creates an auditable production record without any manual input.
