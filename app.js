const option = document.querySelector("#in_s");
const option_output = document.querySelector("#out_s");
const int = document.querySelector("#input");
const out = document.querySelector("#output");
int.addEventListener("keyup", function () {
    option.addEventListener("change", function () {
        if (option.value === "cel") {
            if (option_output.value === "feh") {
                const c = int.value;
                const f = c * (9 / 5) + 32;
                out.value = f;
            } else if (option_output.value === "kel") {
                const c = int.value;
                const k = (c - 0) + 273.15;
                out.value = k;
            } else if (option_output.value === "cel") {
                out.value = int.value;
            }
        } else if (option.value === "feh") {
            if (option_output.value === "cel") {
                const f = int.value;
                const c = (f - 32) * (5 / 9);
                out.value = c;
            } else if (option_output.value === "kel") {
                const f = int.value;
                const k = (f - 32) * (5 / 9) + 273.15;
                out.value = k;
            } else if (option_output.value === "feh") {
                out.value = int.value;
            }
        } else if (option.value === "kel") {
            if (option_output.value === "cel") {
                const k = int.value;
                const c = (k - 0) - 273.15;
                out.value = c;
            } else if (option_output.value === "feh") {
                const k = int.value;
                const f = (k - 273.15) * (9 / 5) + 32;
                out.value = f;
            } else if (option_output.value === "kel") {
                out.value = int.value;
            }
        }
    });
    option_output.addEventListener("change", function () {
        if (option_output.value === "cel") {
            if (option.value === "feh") {
                const f = int.value;
                const c = (f - 32) * (5 / 9);
                out.value = c;
            } else if (option.value === "kel") {
                const k = int.value;
                const c = (k - 0) - 273.15;
                out.value = c;
            } else if (option.value === "cel") {
                out.value = int.value;
            }
        } else if (option_output.value === "feh") {
            if (option.value === "cel") {
                const c = int.value;
                const f = c * (9 / 5) + 32;
                out.value = f;
            } else if (option.value === "kel") {
                const k = int.value;
                const f = (k - 273.15) * (9 / 5) + 32;
                out.value = f;
            } else if (option_output.value === "feh") {
                out.value = int.value;
            }
        } else if (option_output.value === "kel") {
            if (option.value === "cel") {
                const c = int.value;
                const k = (c - 0) + 273.15;
                out.value = k;
            } else if (option.value === "feh") {
                const f = int.value;
                const k = (f - 32) * (5 / 9) + 273.15;
                out.value = k;
            } else if (option_output.value === "kel") {
                out.value = int.value;
            }
        }
    });
    if (option.value === "cel") {
        if (option_output.value === "feh") {
            const c = int.value;
            const f = c * (9 / 5) + 32;
            out.value = f;
        } else if (option_output.value === "kel") {
            const c = int.value;
            const k = (c - 0) + 273.15;
            out.value = k;
        } else if (option_output.value === "cel") {
            out.value = int.value;
        }
    } else if (option.value === "feh") {
        if (option_output.value === "cel") {
            const f = int.value;
            const c = (f - 32) * (5 / 9);
            out.value = c;
        } else if (option_output.value === "kel") {
            const f = int.value;
            const k = (f - 32) * (5 / 9) + 273.15;
            out.value = k;
        } else if (option_output.value === "feh") {
            out.value = int.value;
        }
    } else if (option.value === "kel") {
        if (option_output.value === "cel") {
            const k = int.value;
            const c = (k - 0) - 273.15;
            out.value = c;
        } else if (option_output.value === "feh") {
            const k = int.value;
            const f = (k - 273.15) * (9 / 5) + 32;
            out.value = f;
        } else if (option_output.value === "kel") {
            out.value = int.value;
        }
    }
});
