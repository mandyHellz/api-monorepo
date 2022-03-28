Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var PokeData = function (_a) {
    var pokeName = _a.pokeName, abilities = _a.abilities, image = _a.image, weight = _a.weight, types = _a.types, marginBottom = _a.marginBottom;
    return (React__namespace.createElement("div", { className: "sm:mx-32 mx-5 py-5 sm:py-10 text-center bg-purple-200 rounded-xl mb-".concat(marginBottom) },
        React__namespace.createElement("img", { className: "m-auto w-40", src: image }),
        React__namespace.createElement("h1", { className: "m-auto text-center text-2xl font-bold text-pink-700 capitalize mb-5" }, pokeName),
        React__namespace.createElement("div", { className: "flex flex-col justify-center items-center gap-4" },
            React__namespace.createElement("div", null,
                React__namespace.createElement("p", { className: "font-semibold" }, " Skills: "),
                React__namespace.createElement("ul", { className: "italic" }, abilities.map(function (item) { return (React__namespace.createElement("li", { className: "capitalize" }, item.ability.name)); }))),
            React__namespace.createElement("div", null,
                React__namespace.createElement("p", { className: "font-semibold" }, " Types: "),
                React__namespace.createElement("ul", { className: "italic" }, types.map(function (item) { return (React__namespace.createElement("li", { className: "capitalize" }, item.type.name)); }))),
            React__namespace.createElement("div", null,
                React__namespace.createElement("p", { className: "font-semibold" }, " Weight in Kgs: "),
                React__namespace.createElement("p", { className: "italic" },
                    Number(weight) / 10,
                    " Kgs")))));
};

var FetchApi = function (_a) {
    var pokename = _a.pokename;
    var _b = React__namespace.useState({
        id: "",
        name: "",
        abilities: [],
        sprites: { front_default: "" },
        types: [],
        weight: "",
    }), pokemon = _b[0], setPokemon = _b[1];
    var handleFetching = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios__default["default"].get("https://pokeapi.co/api/v2/pokemon/".concat(pokename))];
                case 1:
                    data = (_a.sent()).data;
                    setPokemon(data);
                    console.log(setPokemon);
                    e.preventDefault();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("button", { onClick: handleFetching }, "Fetch Poke Api"),
        pokemon === null || undefined ? ("loading...") : (React__namespace.createElement(PokeData, { key: pokemon.id, pokeName: pokemon.name, abilities: pokemon.abilities, image: pokemon.sprites.front_default, weight: pokemon.weight, types: pokemon.types, marginBottom: 10 }))));
};
// export default FetchApi;

exports.FetchApi = FetchApi;
//# sourceMappingURL=index.js.map
