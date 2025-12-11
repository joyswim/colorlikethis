## ColorLikeThis

사람들은 디자이너와 소통할 때 ‘느낌’을 기반으로 소통합니다.
예를 들어, “시원한 느낌을 원해.”, “좀 더 부드러운 느낌을 원해.”, “따뜻했으면 좋겠어.”와 같이 말이죠.

고객이 느낌을 떠올리면, 디자이너의 머릿속에는 시각적인 이미지로 변환됩니다. 이 과정에서 주관적인 언어의 차이가 발생합니다.

저는 소통의 차이를 해소하기 위해 느낌으로 검색하고 영감을 주는 ColorLikeThis 서비스를 기획했습니다.

<br/>

## 실행하기(Getting Started)

```bash
pnpm start
```

<br/>

## 폴더 구조

<table style="width: 100%;">
  <tr style="text-align: start;">
    <th>프로젝트</th>
    <th>프론트엔드, 백엔드</th>
  </tr>
  <tr style="vertical-align: top;">
    <td>
      <pre>
📦project
├─ 📂.vscode
├─ 📂apps     # 사용자 프로젝트
│   ├─ 📂frontend
│   ├─ 📂backend
│   └─ 📂project1
├─ 📂packages  # 공용 패키지
│   └─ /design-system
├─ .gitignore
├─ .gitmessage.txt
├─ tsconfig.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ package.json
      </pre>
    </td>
    <td>
      <pre>
📂apps      # 사용자 프로젝트
├─ 📂frontend
│   ├─ 📂public
│   ├─ 📂app
│   ├─ 📂components
│   ├─ 📂constants
│   ├─ 📂hooks
│   ├─ 📂lib
│   ├─ 📂services
│   ├─ 📂store
│   ├─ 📂styles
│   ├─ 📂types
│   ├─ 📂utils
│   └─ package.json
└─ 📂backend
    ├─ 📂src
    │   └─ app.ts
    └─ package.json
      </pre>
    </td>
  </tr>
</table>
