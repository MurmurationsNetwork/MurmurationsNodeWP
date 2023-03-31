<?php

/**
 * Fired during plugin deactivation
**/

namespace Murmurations\Node;

function deactivate() {
    murmurations_index_node_delete( false );
}
