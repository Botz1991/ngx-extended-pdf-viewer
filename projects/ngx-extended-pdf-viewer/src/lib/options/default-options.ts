const _isIE11 = typeof window === 'undefined' ? false : !!(<any>window).MSInputMethodContext && !!(<any>document).documentMode;

export const defaultOptions = {
  cursorToolOnLoad: 0,
  defaultUrl: '',
  defaultZoomValue: '',
  disableHistory: false,
  disablePageLabels: false,
  enablePrintAutoRotate: false,
  enableWebGL: false,
  eventBusDispatchToDOM: false,
  externalLinkRel: 'noopener noreferrer nofollow',
  externalLinkTarget: 0,
  historyUpdateUrl: false,
  imageResourcesPath: './images/',
  maxCanvasPixels: 16777216,
  pdfBugEnabled: false,
  removePageBorders: false,
  renderer: 'canvas',
  renderInteractiveForms: false,
  sidebarViewOnLoad: -1,
  scrollModeOnLoad: -1,
  spreadModeOnLoad: -1,
  textLayerMode: 1,
  useOnlyCssZoom: false,
  viewOnLoad: 0,
  cMapPacked: true,
  cMapUrl: '../assets/cmaps/',
  disableAutoFetch: false,
  disableCreateObjectURL: false,
  disableFontFace: false,
  disableRange: false,
  disableStream: false,
  isEvalSupported: true,
  maxImageSize: -1,
  pdfBug: false,
  postMessageTransfers: true,
  verbosity: 1,
  workerPort: null,
  workerSrc: _isIE11 ? './assets/pdf.worker-es5.js' : './assets/pdf.worker.js'
};
