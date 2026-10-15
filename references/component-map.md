# 组件与资料索引

以下路径相对于技能目录。源码均在 `assets/upstream/code-examples/`。按任务查找对应模块和分卷，不必通读整个仓库。

| 需求 | 源码 | 细节手册 |
| --- | --- | --- |
| 色彩、字体、圆角、暗色模式 | `cds-theme.css`、`tailwind.config.js` | `upstream/01-设计哲学与设计令牌体系.md`、`upstream/07-工程配置与资产代码库总览.md` |
| 按钮、分段选择、状态提示、确认框、附件 | `CdsButton.tsx`、`SegmentedControl.tsx`、`StatusIndicators.tsx`、`ConfirmationDialog.tsx`、`AttachmentCard.tsx` | `upstream/02-基础原子组件与交互控件.md` |
| 消息流、输入框、思考折叠 | `ChatMessageBubbles.tsx`、`ChatComposer.tsx`、`RichComposerWithMentions.tsx`、`ThinkingAccordion.tsx` | `upstream/03-会话核心流与指令交互引擎.md` |
| 模型切换、Token 仪表、工具审批 | `ModelSwitcherWithTokenGauge.tsx`、`McpToolDecisionCard.tsx` | `upstream/03-会话核心流与指令交互引擎.md` |
| 弹簧、氛围光、滚动渐隐 | `ClaudeMotionPresets.ts`、`ReasoningAmbientGlow.tsx`、`ScrollFadeContainer.tsx` | `upstream/04-动效物理学、着色器与环境光影.md` |
| 音频、麦克风、媒体灯箱、共享元素 | `ClaudeAudioPlayer.ts`、`LiveMicActivityBars.tsx`、`MediaLightboxViewer.tsx`、`useClaudeSharedElementTransition.ts` | `upstream/05-视听多媒体与产物交互物理学.md` |
| 工件分栏、iframe 桥、差异视图、代码块 | `ArtifactsSplitPaneResizer.tsx`、`EpitaxyIframeBridge.tsx`、`StreamingDiffViewer.tsx`、`CodeBlock.tsx` | `upstream/05-视听多媒体与产物交互物理学.md` |
| Electron 窗口、桌面顶部、会话拖拽 | `createClaudeMainWindow.ts`、`ClaudeDesktopHeader.tsx`、`DraggableSessionList.tsx` | `upstream/06-系统级桌面架构与协作拓扑.md` |
| 多代理看板、滚动锁定、响应式、键盘焦点、退避 | `CoworkAgentCanvas.tsx`、`useClaudeScrollPinning.ts`、`ContainerResponsiveBar.tsx`、`useClaudeRovingFocus.ts`、`useRateLimitBackoff.ts` | `upstream/06-系统级桌面架构与协作拓扑.md` |

`assets/upstream/src/index.ts` 是组件导出清单。`assets/upstream/package.json` 列出 React、Framer Motion、Lucide 等依赖；根据目标项目选择实际需要的依赖。`upstream/08-AI-Agent-前端-UI-与动效开发指南.md` 是上游代理指导，`upstream/09-Claude-Desktop-2.0-全量版本更新深度逆向分析.md` 仅在涉及其特定版本分析时读取。手册中的版本和技术断言来自上游作者，不自动代表当前 Claude 产品。
