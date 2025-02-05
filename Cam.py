import cv2

# Initialize the webcam (0 is usually the default camera)
cap = cv2.VideoCapture(0)

# Check if the camera opened successfully
if not cap.isOpened():
    print("Cannot open camera")
    exit()

# Continuous loop to capture video
while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    
    # if frame is read correctly ret is True
    if not ret:
        print("Can't receive frame. Exiting ...")
        break
    
    # Display the resulting frame
    cv2.imshow('Camera', frame)
    
    # Press 'q' to exit
    if cv2.waitKey(1) == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()