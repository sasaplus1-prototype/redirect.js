'use strict';

/**
 * generate redirect URI
 *
 * @param {Object} replaces
 */
function generate(replaces) {
  var uri = '';

  replaces || (replaces = {});

  uri += (replaces.protocol || location.protocol) + '//';
  uri += (replaces.hostname || location.hostname);

  if (replaces.port || location.port) {
    uri += ':' + (replaces.port || location.port);
  }

  uri += (replaces.pathname || location.pathname);
  uri += (replaces.search || location.search);
  uri += (replaces.hash || location.hash);

  return uri;
}

/**
 * redirect to generated URI
 *
 * @param {Object} replaces
 */
function redirect(replaces) {
  location.href = generate(replaces);
}

module.exports = {
  generate: generate,
  redirect: redirect
};
