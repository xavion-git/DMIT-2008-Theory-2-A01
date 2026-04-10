import profile from "../../../profile.json";

export default function handler(req, res) {
  res.status(200).json(profile.about);
}