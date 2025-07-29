export interface IRemoverSpecs {
  thickness: string;
  type: "실리콘" | "아크릴";
  adhesiveness: string;
  liner: "싱글라이너" | "양면라이너";
  purpose: "공정용";
}

export const removerSpecList: IRemoverSpecs[] = [
  {
    thickness: "25μ",
    type: "실리콘",
    adhesiveness: "10~100gf",
    liner: "싱글라이너",
    purpose: "공정용",
  },
  {
    thickness: "25μ",
    type: "아크릴",
    adhesiveness: "10~100gf",
    liner: "싱글라이너",
    purpose: "공정용",
  },
  {
    thickness: "25μ",
    type: "실리콘",
    adhesiveness: "10~100gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "25μ",
    type: "아크릴",
    adhesiveness: "10~100gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "50μ",
    type: "실리콘",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "50μ",
    type: "아크릴",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "75μ",
    type: "실리콘",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "75μ",
    type: "아크릴",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "100μ",
    type: "실리콘",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
  {
    thickness: "100μ",
    type: "아크릴",
    adhesiveness: "10~1,000gf",
    liner: "양면라이너",
    purpose: "공정용",
  },
];

export interface IPETProductSpec {
  thickness: string;
  purpose: string;
}

export const PETProductSpecList: IPETProductSpec[] = [
  { thickness: "25μ", purpose: "공정용" },
  { thickness: "50μ", purpose: "공정용" },
  { thickness: "100μ", purpose: "UV, Hard Coating, Inmold" },
  { thickness: "125μ", purpose: "UV, Hard Coating, Inmold" },
  { thickness: "188μ", purpose: "UV, Hard Coating, Inmold" },
  { thickness: "250μ", purpose: "UV, Hard Coating, Inmold" },
];
