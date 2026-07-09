// IKL / ikl.js

import { IKL_FORMULA } from "./formula.js";

export function computeIKL(context) {

    return {
        formula: IKL_FORMULA,
        input: context,
        real: true,
        status: "IKL-ready"
    };
}

