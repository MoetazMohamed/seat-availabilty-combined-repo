\documentclass[12pt]{article}
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{hyperref}

\title{Library Seat Availability System}
\author{}
\date{}

\begin{document}

\maketitle

\section*{Overview}

This project addresses a common challenge faced by university students: locating available seating in the library during peak hours. By leveraging IoT devices and real-time data processing, this system provides an efficient solution that eliminates the need for physically checking multiple library floors for free seats.

The \textbf{Library Seat Availability System} uses TTGO ESP32 boards with pressure sensors to monitor seat occupancy and displays real-time availability on a dynamic web interface accessible to students.

\section*{Features}

\begin{itemize}
    \item \textbf{Real-time Updates:} Displays seat availability on a web interface with live updates.
    \item \textbf{Efficient Monitoring:} Pressure sensors detect seat occupancy and send the data to a server.
    \item \textbf{User-Friendly Interface:} Students can quickly identify available seats from the first-floor display or a web platform.
    \item \textbf{IoT-Driven:} Combines embedded systems, Wi-Fi communication, and APIs for seamless operation.
\end{itemize}

\section*{Problem Statement}

Students often face the frustration of searching through multiple library floors to find an available seat, especially during busy periods. This manual process is time-consuming and inefficient. The \textbf{Library Seat Availability System} solves this by providing real-time seat occupancy data.

\section*{Technical Overview}

\subsection*{Hardware Components}
\begin{itemize}
    \item \textbf{TTGO ESP32 Boards:} For data collection and Wi-Fi communication.
    \item \textbf{Pressure Sensors:} To detect occupancy of couches and tables.
    \item \textbf{Wi-Fi Router:} Facilitates communication between TTGO boards and the server.
    \item \textbf{Server:} Manages data processing and the web interface.
    \item \textbf{Display Screen:} Shows seat availability in real-time on the first floor.
\end{itemize}

\subsection*{Software Components}
\begin{itemize}
    \item \textbf{Arduino IDE:} For programming TTGO boards.
    \item \textbf{Wi-Fi and HTTP Libraries:} Handle communication between devices and the server.
    \item \textbf{Backend:} Built with NestJS to manage APIs and WebSocket functionalities.
    \item \textbf{Frontend:} Built using Angular 16 to display real-time data on an interactive interface.
    \item \textbf{Database:} MongoDB for storing seat occupancy data.
    \item \textbf{WebSocket API:} Ensures real-time updates on seat status.
\end{itemize}

\subsection*{System Workflow}
\begin{enumerate}
    \item Pressure sensors detect seat occupancy and send data to TTGO boards.
    \item TTGO boards communicate with the server via Wi-Fi.
    \item The server updates the database and sends real-time updates to the web interface.
    \item Students access the web interface or a display screen to view available seats.
\end{enumerate}

\section*{Project Status}

\subsection*{Completed Tasks}
\begin{itemize}
    \item Database setup using MongoDB.
    \item Backend development using NestJS.
    \item Real-time WebSocket integration.
    \item PCB assembly of TTGO boards and pressure sensors.
\end{itemize}

\subsection*{Pending Tasks}
\begin{itemize}
    \item Configuring Arduino code to integrate APIs with TTGO boards.
    \item Fine-tuning seat occupancy detection thresholds.
    \item Conducting end-to-end testing.
\end{itemize}

\section*{Next Steps}
\begin{enumerate}
    \item Finalize the Arduino code and upload it to TTGO boards.
    \item Optimize seat occupancy detection logic.
    \item Perform comprehensive testing to ensure reliability and accuracy.
    \item Deploy the system for a live demonstration.
\end{enumerate}

\section*{Demonstration Goals}
\begin{itemize}
    \item Show live updates of seat occupancy on the web interface.
    \item Validate the functionality of APIs for data retrieval and updates.
    \item Display seamless integration between hardware and software components.
\end{itemize}

\section*{Ethical Considerations}
\begin{itemize}
    \item \textbf{Privacy:} No personal data is collected; only seat availability is monitored.
    \item \textbf{Security:} Data transmission is encrypted to prevent unauthorized access.
    \item \textbf{Safety:} Components are safely installed under seating to prevent damage or hazards.
\end{itemize}

\section*{Conclusion}

The \textbf{Library Seat Availability System} offers an innovative, practical solution to a common student problem. By saving time and reducing frustration, it enhances the library experience while showcasing advanced technologies in embedded systems, Angular 16, and real-time communication.

\end{document}
