import decline from "../assets/white_close.png";
import red_decline from "../assets/red_close.png";
import green_decline from "../assets/green_close.png";

import accept from "../assets/white_check.png";
import red_accept from "../assets/red_check.png";
import green_accept from "../assets/green_check.png";

import red_left_arrows from "../assets/red_left_arrows.png";
import green_left_arrows from "../assets/green_left_arrows.png";

import red_right_arrows from "../assets/red_right_arrows.png";
import green_right_arrows from "../assets/green_right_arrows.png";

export const getButton = (value: number): string =>
  value < 50
    ? "/red_button.png"
    : value > 50
    ? "/green_button.png"
    : "/orange_button.png";

export const getTrackBorder = (value: number): string =>
  value < 50
    ? "custom-track-left"
    : value > 50
    ? "custom-track-right"
    : "custom-track-neutral";

export const getTrackColor = (value: number): string =>
  value < 50
    ? "custom-track-inner-left"
    : value > 50
    ? "custom-track-inner-right"
    : "custom-track-inner-neutral";

export const getTypeDecline = (value: number): string =>
  value < 50 ? red_decline : value > 50 ? green_decline : decline;

export const getTypeAccept = (value: number): string =>
  value < 50 ? red_accept : value > 50 ? green_accept : accept;

export const getArrowsLeft = (value: number): string =>
  value < 50 ? red_left_arrows : value > 50 ? green_left_arrows : "";

export const getArrowsRight = (value: number): string =>
  value < 50 ? red_right_arrows : value > 50 ? green_right_arrows : "";

export const getTrackTextColor = (value: number): string =>
  value < 50
    ? "rgba(128, 32, 55, 1)"
    : value > 50
    ? "rgba(7, 110, 73, 1)"
    : "white";
