# Library Seat Availability System

## Overview

This project addresses a common challenge faced by university students: locating available seating in the library during peak hours. By leveraging IoT devices and real-time data processing, this system provides an efficient solution that eliminates the need for physically checking multiple library floors for free seats.

The **Library Seat Availability System** uses TTGO ESP32 boards with pressure sensors to monitor seat occupancy and displays real-time availability on a dynamic web interface accessible to students.

## Demo

Check out the demo of our project on [YouTube](https://www.youtube.com/watch?v=YOUR_VIDEO_ID).
## Features

- **Real-time Updates:** Displays seat availability on a web interface with live updates.
- **Efficient Monitoring:** Pressure sensors detect seat occupancy and send the data to a server.
- **User-Friendly Interface:** Students can quickly identify available seats from the first-floor display or a web platform.
- **IoT-Driven:** Combines embedded systems, Wi-Fi communication, and APIs for seamless operation.

## Problem Statement

Students often face the frustration of searching through multiple library floors to find an available seat, especially during busy periods. This manual process is time-consuming and inefficient. The **Library Seat Availability System** solves this by providing real-time seat occupancy data.

## Technical Overview

### Hardware Components

- **TTGO ESP32 Boards:** For data collection and Wi-Fi communication.
- **Pressure Sensors:** To detect occupancy of couches and tables.
- **Wi-Fi Router:** Facilitates communication between TTGO boards and the server.
- **Server:** Manages data processing and the web interface.
- **Display Screen:** Shows seat availability in real-time on the first floor.

### Software Components

- **Arduino IDE:** For programming TTGO boards.
- **Wi-Fi and HTTP Libraries:** Handle communication between devices and the server.
- **Backend:** Built with NestJS to manage APIs and WebSocket functionalities.
- **Frontend:** Built using Angular 16 to display real-time data on an interactive interface.
- **Database:** MongoDB for storing seat occupancy data.
- **WebSocket API:** Ensures real-time updates on seat status.

### System Workflow

1. Pressure sensors detect seat occupancy and send data to TTGO boards.
2. TTGO boards communicate with the server via Wi-Fi.
3. The server updates the database and sends real-time updates to the web interface.
4. Students access the web interface or a display screen to view available seats.

## Project Status

### Completed Tasks

- Database setup using MongoDB.
- Backend development using NestJS.
- Real-time WebSocket integration.
- PCB assembly of TTGO boards and pressure sensors.

### Pending Tasks

- Configuring Arduino code to integrate APIs with TTGO boards.
- Fine-tuning seat occupancy detection thresholds.
- Conducting end-to-end testing.

## Next Steps

1. Finalize the Arduino code and upload it to TTGO boards.
2. Optimize seat occupancy detection logic.
3. Perform comprehensive testing to ensure reliability and accuracy.
4. Deploy the system for a live demonstration.

## Demonstration Goals

- Show live updates of seat occupancy on the web interface.
- Validate the functionality of APIs for data retrieval and updates.
- Display seamless integration between hardware and software components.

## Ethical Considerations

- **Privacy:** No personal data is collected; only seat availability is monitored.
- **Security:** Data transmission is encrypted to prevent unauthorized access.
- **Safety:** Components are safely installed under seating to prevent damage or hazards.

## Conclusion

The **Library Seat Availability System** offers an innovative, practical solution to a common student problem. By saving time and reducing frustration, it enhances the library experience while showcasing advanced technologies in embedded systems, Angular 16, and real-time communication.
