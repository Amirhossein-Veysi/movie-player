function isValidVideo(str) {
  let valid = false;
  let validFormats = ["mkv", "mp4", "ogg", "webm"];
  let format = str.split(".").pop();

  validFormats.map((frmt) => {
    if (format == frmt) valid = true;
  });
  return valid;
}

export default isValidVideo;
