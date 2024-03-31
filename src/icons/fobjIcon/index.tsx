import React from "react";
import { FobjIconProps } from "./types";

const FobjIcon: React.FC<FobjIconProps> = ({
  color,
  size = 108,
  className,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 108 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.38203 14.56H18.182V17.12H3.38203V14.56ZM3.70203 29H0.74203V0.999998H19.942V3.56H3.70203V29ZM37.143 29.24C35.0363 29.24 33.0763 28.8933 31.263 28.2C29.4763 27.48 27.9163 26.48 26.583 25.2C25.2763 23.8933 24.2496 22.3867 23.503 20.68C22.783 18.9467 22.423 17.0533 22.423 15C22.423 12.9467 22.783 11.0667 23.503 9.36C24.2496 7.62666 25.2763 6.12 26.583 4.84C27.9163 3.53333 29.4763 2.53333 31.263 1.84C33.0496 1.12 35.0096 0.759999 37.143 0.759999C39.2496 0.759999 41.1963 1.12 42.983 1.84C44.7696 2.53333 46.3163 3.52 47.623 4.8C48.9563 6.08 49.983 7.58667 50.703 9.32C51.4496 11.0533 51.823 12.9467 51.823 15C51.823 17.0533 51.4496 18.9467 50.703 20.68C49.983 22.4133 48.9563 23.92 47.623 25.2C46.3163 26.48 44.7696 27.48 42.983 28.2C41.1963 28.8933 39.2496 29.24 37.143 29.24ZM37.143 26.6C38.823 26.6 40.3696 26.32 41.783 25.76C43.223 25.1733 44.463 24.36 45.503 23.32C46.5696 22.2533 47.3963 21.0267 47.983 19.64C48.5696 18.2267 48.863 16.68 48.863 15C48.863 13.32 48.5696 11.7867 47.983 10.4C47.3963 8.98667 46.5696 7.76 45.503 6.72C44.463 5.65333 43.223 4.84 41.783 4.28C40.3696 3.69333 38.823 3.4 37.143 3.4C35.463 3.4 33.903 3.69333 32.463 4.28C31.023 4.84 29.7696 5.65333 28.703 6.72C27.663 7.76 26.8363 8.98667 26.223 10.4C25.6363 11.7867 25.343 13.32 25.343 15C25.343 16.6533 25.6363 18.1867 26.223 19.6C26.8363 21.0133 27.663 22.2533 28.703 23.32C29.7696 24.36 31.023 25.1733 32.463 25.76C33.903 26.32 35.463 26.6 37.143 26.6ZM57.6577 29V0.999998H69.7377C72.8577 0.999998 75.271 1.62666 76.9777 2.88C78.711 4.13333 79.5777 5.90667 79.5777 8.2C79.5777 9.72 79.2177 11 78.4977 12.04C77.8043 13.08 76.8443 13.8667 75.6177 14.4C74.4177 14.9333 73.0977 15.2 71.6577 15.2L72.3377 14.24C74.1243 14.24 75.6577 14.52 76.9377 15.08C78.2443 15.6133 79.2577 16.4267 79.9777 17.52C80.6977 18.5867 81.0577 19.92 81.0577 21.52C81.0577 23.8933 80.1777 25.7333 78.4177 27.04C76.6843 28.3467 74.0577 29 70.5377 29H57.6577ZM60.6177 26.56H70.4977C72.951 26.56 74.831 26.1467 76.1377 25.32C77.4443 24.4667 78.0977 23.12 78.0977 21.28C78.0977 19.4667 77.4443 18.1467 76.1377 17.32C74.831 16.4667 72.951 16.04 70.4977 16.04H60.2977V13.6H69.5377C71.7777 13.6 73.511 13.1733 74.7377 12.32C75.991 11.4667 76.6177 10.2 76.6177 8.52C76.6177 6.81333 75.991 5.54667 74.7377 4.72C73.511 3.86666 71.7777 3.44 69.5377 3.44H60.6177V26.56ZM90.0139 29.24C88.4406 29.24 86.9606 28.8933 85.5739 28.2C84.2139 27.5067 83.1206 26.52 82.2939 25.24L84.0139 23.24C84.7872 24.36 85.6806 25.2133 86.6939 25.8C87.7072 26.3867 88.8272 26.68 90.0539 26.68C93.5206 26.68 95.2539 24.6267 95.2539 20.52V3.56H85.0139V0.999998H98.1739V20.4C98.1739 23.36 97.4806 25.5733 96.0939 27.04C94.7339 28.5067 92.7072 29.24 90.0139 29.24ZM105.581 29.2C104.995 29.2 104.488 28.9867 104.061 28.56C103.661 28.1333 103.461 27.6133 103.461 27C103.461 26.36 103.661 25.84 104.061 25.44C104.488 25.04 104.995 24.84 105.581 24.84C106.168 24.84 106.661 25.04 107.061 25.44C107.488 25.84 107.701 26.36 107.701 27C107.701 27.6133 107.488 28.1333 107.061 28.56C106.661 28.9867 106.168 29.2 105.581 29.2Z"
        fill={color}
      />
    </svg>
  );
};

export default FobjIcon;
